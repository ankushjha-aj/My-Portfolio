"use client";

import React from 'react';

export const TerminalVisual = () => {
  return (
    <div className="terminal-container animate-fade-in delay-200">
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="terminal-title">bash — ankush@opsbee</span>
      </div>
      <div className="terminal-body">
        <div className="line"><span className="cmd-prompt">$</span> <span className="cmd-text">terraform plan</span></div>
        <div className="line status-msg">Plan: 12 to add, 0 to change, 0 to destroy.</div>
        <div className="line"><span className="cmd-prompt">$</span> <span className="cmd-text">kubectl get nodes</span></div>
        <div className="line">NAME             STATUS   ROLES    AGE   VERSION</div>
        <div className="line">master-01        Ready    control  42d   v1.28.2</div>
        <div className="line">worker-01        Ready    worker   42d   v1.28.2</div>
        <div className="line"><span className="cmd-prompt">$</span> <span className="cmd-text">ansible-playbook site.yml</span></div>
        <div className="line status-msg">PLAY [Configure Web Servers] ********************</div>
        <div className="line success-msg">changed=12  unreachable=0  failed=0</div>
        <div className="line"><span className="cmd-prompt">$</span> <span className="cmd-text">gh pr status</span></div>
        <div className="line success-msg">✓ CI/CD Pipeline: All checks passed.</div>
        <div className="line cursor">_</div>
      </div>
    </div>
  );
};
