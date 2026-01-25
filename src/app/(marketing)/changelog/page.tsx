import AnimationContainer from "@/components/global/animation-container";
import React from 'react'

const CHANGELOG = [
    {
        version: "0.4.0",
        date: "2026-01-26",
        changes: [
            // Kanban & UI
            "Kanban: Add within-column drag-and-drop sorting",
            "Kanban: Allow card titles to wrap to two lines",
            "Kanban: Show notes section in drag overlay to match normal card",
            "Layout: Add compact mode for card density optimization",
            // Settings & Icons
            "Settings: Update theme/sidebar/layout icons to Collection + Tab silhouette style",
            // Open Tabs
            "Open Tabs: Display audio indicator icon for tabs playing sound",
            // Command Menu
            "Command Menu: Reset selection to first item when search input changes",
            // Internationalization
            "i18n: Add internationalization support with English and Chinese",
            "i18n: Complete Chinese localization for Settings, Command Menu, and Help Center",
            // Bug Fixes
            "Fix: Extract provider_token in web OAuth callback for sync",
        ],
    },
    {
        version: "0.1.2",
        date: "2026-01-14",
        changes: [
            "Simplify sync mechanism with hash+version detection",
            "Make sync mode selection non-blocking for better UX",
            "Rename Overview tab to Tabs for future extensibility",
            "Add TabQ branding to command menu footer",
            "Fix: Refresh search index after adding tab to collection",
            "Use Google Favicon service for consistent icon fetching",
            "Fix: Refresh search index immediately after creating workspace/collection",
        ],
    },
    {
        version: "0.1.1",
        date: "2026-01-13",
        changes: [
            "Fix: Prevent space key from triggering drag in notes",
            "Fix: Improve drag-and-drop visuals with DragOverlay",
            "Improve command menu search highlighting with colors",
            "Refactor: Split contexts and hooks for better separation of concerns",
            "Redesign command menu page info banner with card layout",
            "Quick create workspace/collection from search in command menu",
            "Improve sync flow with manual sync button and deferred initial sync",
        ],
    },
    {
        version: "0.1.0",
        date: "2026-01-09",
        changes: [
            "Change local backup to hourly with 7-day retention",
            "Add Fuse.js fuzzy search and Collection highlight navigation",
            "Improve BackgroundSync error logging",
            "Fix Zod v4 CSP eval error (using jitless mode)",
        ],
    },
    {
        version: "0.0.5",
        date: "2026-01-08",
        changes: [
            // New Features
            "Edge Browser Support - OAuth and UI now work with Microsoft Edge",
            "Pinned Tab Support - OpenTabs panel now shows pinned browser tabs",
            "Bookmark Status Indicator - Shows whether current page is saved in TabQ",
            "Link Open Behavior Setting - Configure how links open (new tab vs current tab)",
            "URL Display in Command Menu - Search results now show URLs",
            "Workspace Memory - Remembers last visited workspace and collection collapse state",
            "General Settings Navigation - Added entry point for general settings",
            // Improvements
            "Multi-select Visual Feedback - Better background highlight when selecting multiple items",
            "Tab Description Toggle - Removed workspace notes, added per-tab description toggle",
            "Collection Drag Preview - Uses DragOverlay for smoother drag experience",
            "Auto-collapse Collections - Collections auto-collapse during drag reorder for cleaner UI",
            // Bug Fixes
            "Fixed: Prevent click action when interacting with card buttons",
            "Fixed: Correct sortKey generation for new tabs",
            "Fixed: Prevent duplicate workspace creation requests",
            "Fixed: Prevent CardNotes textarea from losing focus during save",
            // Developer Experience
            "Added Playwright E2E testing framework",
            "Added husky + lint-staged for pre-commit code quality checks",
        ],
    },
    {
        version: "0.0.3",
        date: "2025-12-27",
        changes: [
            "Added official Sync feature",
            "Fixed page bugs",
        ],
    },
    {
        version: "0.0.2",
        date: "2025-12-26",
        changes: [
            "Fixed page issues",
        ],
    },
    {
        version: "0.0.1",
        date: "2025-12-25",
        changes: [
            "Initial release",
        ],
    },
];

const ChangeLogPage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 max-w-2xl mx-auto px-4">
            <AnimationContainer delay={0.1}>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    Change Log
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    Stay up to date with the latest changes to our platform.
                </p>
            </AnimationContainer>

            <div className="mt-12 w-full space-y-8">
                {CHANGELOG.map((entry, index) => (
                    <AnimationContainer key={entry.version} delay={0.1 * (index + 1)}>
                        <div className="border border-border rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-foreground">
                                    v{entry.version}
                                </h2>
                                <span className="text-sm text-muted-foreground">
                                    {entry.date}
                                </span>
                            </div>
                            <ul className="space-y-2">
                                {entry.changes.map((change, i) => (
                                    <li key={i} className="text-muted-foreground flex items-start">
                                        <span className="mr-2 text-primary">•</span>
                                        {change}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimationContainer>
                ))}
            </div>
        </div>
    )
};

export default ChangeLogPage
