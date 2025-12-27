import AnimationContainer from "@/components/global/animation-container";
import React from 'react'

const CHANGELOG = [
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
