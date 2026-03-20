"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface FileNode {
  name: string;
  path: string;
  type: "blob" | "tree";
  children?: FileNode[];
}

const GITHUB_OWNER = "ankushjha-aj";
const GITHUB_REPO = "My-Portfolio";
const GITHUB_BRANCH = "main";

function buildTree(items: { path: string; type: string }[]): FileNode[] {
  const root: FileNode[] = [];
  const map: Record<string, FileNode> = {};

  for (const item of items) {
    const parts = item.path.split("/");
    let current = root;
    let currentPath = "";

    for (let i = 0; i < parts.length; i++) {
      currentPath = currentPath ? `${currentPath}/${parts[i]}` : parts[i];
      const isLast = i === parts.length - 1;
      const nodeType = isLast ? (item.type as "blob" | "tree") : "tree";

      if (!map[currentPath]) {
        const node: FileNode = {
          name: parts[i],
          path: currentPath,
          type: nodeType,
          children: nodeType === "tree" ? [] : undefined,
        };
        map[currentPath] = node;
        current.push(node);
      }
      if (map[currentPath].children) {
        current = map[currentPath].children!;
      }
    }
  }
  return root;
}

function findNode(tree: FileNode[], path: string): FileNode | null {
  if (!path || path === "/" || path === ".") return { name: "/", path: "", type: "tree", children: tree };
  const parts = path.split("/").filter(Boolean);
  let current = tree;
  let node: FileNode | null = null;
  for (const part of parts) {
    node = current.find((n) => n.name === part) || null;
    if (!node) return null;
    if (node.children) current = node.children;
  }
  return node;
}

export default function Terminal() {
  const [lines, setLines] = useState<{ text: string; color?: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [cwd, setCwd] = useState("");
  const [tree, setTree] = useState<FileNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchingFile, setFetchingFile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Fetch repo tree on mount
  useEffect(() => {
    const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/trees/${GITHUB_BRANCH}?recursive=1`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.tree) {
          setTree(buildTree(data.tree));
          setLines([
            { text: `Connected to github.com/${GITHUB_OWNER}/${GITHUB_REPO}`, color: "text-emerald-400" },
            { text: `Branch: ${GITHUB_BRANCH} | ${data.tree.length} objects loaded`, color: "text-slate-500" },
            { text: "" },
            { text: "── Terraform ──", color: "text-slate-500 text-[11px] tracking-widest uppercase" },
            { text: "❯ terraform apply --auto-approve", color: "text-primary" },
            { text: "+ aws_eks_cluster.main", color: "text-emerald-400" },
            { text: "+ aws_vpc.production", color: "text-emerald-400" },
            { text: "+ aws_iam_role.eks_service_role", color: "text-emerald-400" },
            { text: "Plan: 12 to add, 0 to change, 0 to destroy." },
            { text: "✓ Apply complete! Resources: 12 added.", color: "text-emerald-400 font-bold" },
            { text: "" },
            { text: "── Ansible ──", color: "text-slate-500 text-[11px] tracking-widest uppercase" },
            { text: "❯ ansible-playbook -i inventory/prod site.yml", color: "text-primary" },
            { text: "TASK [Pull Docker images] .................. ok", color: "text-emerald-400" },
            { text: "TASK [Configure Nginx proxy] ............... ok", color: "text-emerald-400" },
            { text: "TASK [Restart services] .................... changed", color: "text-amber-400" },
            { text: "PLAY RECAP: ok=3 changed=1 failed=0", color: "text-emerald-400 font-bold" },
            { text: "" },
            { text: "── Kubernetes ──", color: "text-slate-500 text-[11px] tracking-widest uppercase" },
            { text: "❯ kubectl get pods -n production", color: "text-primary" },
            { text: "api-gateway-7d9f8c  1/1  Running  0  3d", color: "text-emerald-400" },
            { text: "auth-svc-5c4d8f9a   1/1  Running  0  3d", color: "text-emerald-400" },
            { text: "redis-master-0      1/1  Running  0  7d", color: "text-emerald-400" },
            { text: "" },
            { text: "── Git ──", color: "text-slate-500 text-[11px] tracking-widest uppercase" },
            { text: "❯ git log --oneline -3", color: "text-primary" },
            { text: "a3f82d1 feat: migrate to native Tailwind CSS", color: "text-amber-400" },
            { text: "c91b4e7 fix: dark mode hydration issue", color: "text-amber-400" },
            { text: "7e2f9a3 refactor: extract global components", color: "text-amber-400" },
            { text: "" },
            { text: '💡 Type "help" for available commands, or "ls" to browse the codebase', color: "text-slate-500 animate-pulse" },
          ]);
        } else {
          setLines([{ text: "⚠ Failed to load repository tree. Try refreshing.", color: "text-red-400" }]);
        }
        setLoading(false);
      })
      .catch(() => {
        setLines([{ text: "⚠ Network error. Could not reach GitHub API.", color: "text-red-400" }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const addLines = useCallback((newLines: { text: string; color?: string }[]) => {
    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const prompt = cwd ? `~/${cwd}` : "~";

  const handleCommand = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const raw = inputValue.trim();
    setInputValue("");
    if (!raw) return;

    const parts = raw.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");

    addLines([{ text: `${prompt} ❯ ${raw}`, color: "text-primary" }]);

    switch (cmd) {
      case "help": {
        addLines([
          { text: "Available commands:", color: "text-slate-400" },
          { text: "  ls            List files in current directory", color: "text-emerald-400" },
          { text: "  cd <dir>      Change directory (cd .. to go up)", color: "text-emerald-400" },
          { text: "  cat <file>    View file contents", color: "text-emerald-400" },
          { text: "  pwd           Print working directory", color: "text-emerald-400" },
          { text: "  find <name>   Search for files by name", color: "text-emerald-400" },
          { text: "  tree          Show directory tree", color: "text-emerald-400" },
          { text: "  clear         Clear terminal", color: "text-emerald-400" },
          { text: "  help          Show this help message", color: "text-emerald-400" },
        ]);
        break;
      }

      case "clear": {
        setLines([]);
        break;
      }

      case "pwd": {
        addLines([{ text: `/${cwd || GITHUB_REPO}`, color: "text-slate-300" }]);
        break;
      }

      case "ls": {
        const targetPath = arg ? (cwd ? `${cwd}/${arg}` : arg) : cwd;
        const node = findNode(tree, targetPath);
        if (!node || node.type !== "tree" || !node.children) {
          addLines([{ text: `ls: cannot access '${arg || "."}': Not a directory`, color: "text-red-400" }]);
        } else {
          const dirs = node.children.filter((n) => n.type === "tree").sort((a, b) => a.name.localeCompare(b.name));
          const files = node.children.filter((n) => n.type === "blob").sort((a, b) => a.name.localeCompare(b.name));
          const entries: { text: string; color?: string }[] = [];
          for (const d of dirs) entries.push({ text: `📁 ${d.name}/`, color: "text-blue-400 font-bold" });
          for (const f of files) entries.push({ text: `   ${f.name}`, color: "text-slate-300" });
          if (entries.length === 0) entries.push({ text: "(empty directory)", color: "text-slate-500" });
          addLines(entries);
        }
        break;
      }

      case "cd": {
        if (!arg || arg === "~" || arg === "/") {
          setCwd("");
          addLines([{ text: "~", color: "text-slate-400" }]);
        } else if (arg === "..") {
          const newCwd = cwd.split("/").slice(0, -1).join("/");
          setCwd(newCwd);
          addLines([{ text: `~/${newCwd || ""}`, color: "text-slate-400" }]);
        } else {
          const targetPath = cwd ? `${cwd}/${arg}` : arg;
          const node = findNode(tree, targetPath);
          if (node && node.type === "tree") {
            setCwd(targetPath);
            addLines([{ text: `~/${targetPath}`, color: "text-slate-400" }]);
          } else {
            addLines([{ text: `cd: no such directory: ${arg}`, color: "text-red-400" }]);
          }
        }
        break;
      }

      case "cat": {
        if (!arg) {
          addLines([{ text: "cat: missing file operand", color: "text-red-400" }]);
          break;
        }
        const filePath = cwd ? `${cwd}/${arg}` : arg;
        const node = findNode(tree, filePath);
        if (!node || node.type !== "blob") {
          addLines([{ text: `cat: ${arg}: No such file`, color: "text-red-400" }]);
          break;
        }
        setFetchingFile(true);
        addLines([{ text: `Loading ${arg}...`, color: "text-slate-500" }]);
        try {
          const url = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${filePath}`;
          const res = await fetch(url);
          if (!res.ok) throw new Error("fetch failed");
          const text = await res.text();
          const contentLines = text.split("\n").slice(0, 50);
          const output: { text: string; color?: string }[] = [
            { text: `── ${arg} ──`, color: "text-slate-500 text-[11px] tracking-widest uppercase" },
          ];
          for (const l of contentLines) {
            output.push({ text: l, color: "text-slate-300" });
          }
          if (text.split("\n").length > 50) {
            output.push({ text: `... (${text.split("\n").length - 50} more lines truncated)`, color: "text-slate-500" });
          }
          addLines(output);
        } catch {
          addLines([{ text: `cat: error reading ${arg}`, color: "text-red-400" }]);
        }
        setFetchingFile(false);
        break;
      }

      case "find": {
        if (!arg) {
          addLines([{ text: "find: missing search pattern", color: "text-red-400" }]);
          break;
        }
        const lower = arg.toLowerCase();
        const allNodes: FileNode[] = [];
        const collect = (nodes: FileNode[]) => {
          for (const n of nodes) {
            if (n.name.toLowerCase().includes(lower)) allNodes.push(n);
            if (n.children) collect(n.children);
          }
        };
        collect(tree);
        if (allNodes.length === 0) {
          addLines([{ text: `No files matching '${arg}'`, color: "text-slate-500" }]);
        } else {
          addLines(
            allNodes.slice(0, 20).map((n) => ({
              text: `${n.type === "tree" ? "📁" : "  "} ${n.path}`,
              color: n.type === "tree" ? "text-blue-400" : "text-slate-300",
            }))
          );
          if (allNodes.length > 20) addLines([{ text: `... and ${allNodes.length - 20} more`, color: "text-slate-500" }]);
        }
        break;
      }

      case "tree": {
        const targetPath = arg ? (cwd ? `${cwd}/${arg}` : arg) : cwd;
        const node = findNode(tree, targetPath);
        if (!node || node.type !== "tree" || !node.children) {
          addLines([{ text: `tree: cannot access '${arg || "."}': Not a directory`, color: "text-red-400" }]);
          break;
        }
        const output: { text: string; color?: string }[] = [];
        let count = 0;
        const walk = (nodes: FileNode[], prefix: string) => {
          for (let i = 0; i < nodes.length && count < 40; i++) {
            count++;
            const isLast = i === nodes.length - 1;
            const connector = isLast ? "└── " : "├── ";
            const icon = nodes[i].type === "tree" ? "📁 " : "";
            output.push({
              text: `${prefix}${connector}${icon}${nodes[i].name}`,
              color: nodes[i].type === "tree" ? "text-blue-400" : "text-slate-300",
            });
            if (nodes[i].children) {
              walk(nodes[i].children!, prefix + (isLast ? "    " : "│   "));
            }
          }
        };
        walk(node.children, "");
        addLines(output);
        if (count >= 40) addLines([{ text: "... (output truncated)", color: "text-slate-500" }]);
        break;
      }

      default:
        addLines([{ text: `command not found: ${cmd}. Type "help" for available commands.`, color: "text-red-400" }]);
    }
  };

  return (
    <div
      className="bg-[#0c1222] p-0.5 rounded-xl shadow-2xl shadow-primary/10 overflow-hidden w-full max-w-2xl mx-auto border border-slate-700/50 animate-slideInRight"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title Bar */}
      <div className="flex gap-2 px-4 py-2.5 bg-slate-800/80 border-b border-slate-700 items-center">
        <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></div>
        <div className="ml-3 text-xs text-slate-400 font-mono tracking-wide">devops@portfolio:{prompt}</div>
        <div className="ml-auto flex gap-2 text-[10px] text-slate-500 font-mono">
          <span className="px-1.5 py-0.5 bg-slate-700/50 rounded">zsh</span>
          <span className="px-1.5 py-0.5 bg-emerald-900/50 text-emerald-400 rounded">live</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div ref={bodyRef} className="p-4 font-mono text-[12px] leading-relaxed text-slate-300 bg-[#0c1222] h-[400px] overflow-y-auto scroll-smooth">
        {loading && <p className="text-primary animate-pulse">Connecting to GitHub repository...</p>}
        {lines.map((line, i) => (
          <p key={i} className={line.color || "text-slate-300"}>
            {line.text || "\u00A0"}
          </p>
        ))}

        {/* Input Line */}
        {!loading && (
          <div className="flex items-center gap-1 mt-1">
            <span className="text-slate-500 shrink-0">{prompt}</span>
            <span className="text-emerald-400 shrink-0">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none text-slate-200 font-mono text-[12px] w-full caret-primary placeholder-slate-600"
              placeholder={fetchingFile ? "loading..." : "type a command..."}
              spellCheck={false}
              autoComplete="off"
              disabled={fetchingFile}
            />
            <span className="w-1.5 h-4 bg-primary/70 animate-blink rounded-sm shrink-0"></span>
          </div>
        )}
      </div>
    </div>
  );
}
