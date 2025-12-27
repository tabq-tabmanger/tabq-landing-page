import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Link from "next/link";

const Privacy = () => {
    return (
        <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
                    Privacy Policy
                </h1>
                <p className="text-sm mb-2 italic mt-20">
                    Last updated: December 27, 2025
                </p>
                <p className="mt-4">
                    This Privacy Policy describes how TabQ (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles information when you use our browser extension.
                </p>

                <h2 className="text-xl font-medium mt-8">
                    Summary
                </h2>
                <p className="mt-4 text-muted-foreground">
                    <strong>TabQ is designed with privacy in mind.</strong> All your data (workspaces, collections, tabs) is stored locally on your device by default. We do not collect, analyze, or use any of your personal data.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Data Storage
                </h2>
                <p className="mt-4 text-muted-foreground">
                    TabQ stores all user data locally using your browser&apos;s built-in storage APIs. This includes:
                </p>
                <ul className="list-disc ml-8 mt-4 text-muted-foreground">
                    <li>Workspace names and configurations</li>
                    <li>Collections and saved tabs</li>
                    <li>User preferences and settings</li>
                </ul>

                <h2 className="text-xl font-medium mt-12">
                    Optional Cloud Sync
                </h2>
                <p className="mt-4 text-muted-foreground">
                    TabQ offers an optional cloud sync feature powered by Supabase. If you choose to enable this feature:
                </p>
                <ul className="list-disc ml-8 mt-4 text-muted-foreground">
                    <li>Your workspace data will be synced to secure cloud storage</li>
                    <li>This allows you to access your data across multiple devices</li>
                    <li>We do not access, analyze, or use your synced data for any purpose</li>
                    <li>You can disable sync at any time and your data will remain local only</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                    Cloud sync is entirely optional. TabQ works fully offline with local storage only.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Information We Do Not Collect
                </h2>
                <p className="mt-4 text-muted-foreground">
                    We do not collect:
                </p>
                <ul className="list-disc ml-8 mt-4 text-muted-foreground">
                    <li>Personal identification information</li>
                    <li>Browsing history</li>
                    <li>URLs you visit</li>
                    <li>Usage analytics or telemetry</li>
                    <li>Any data for advertising purposes</li>
                </ul>

                <h2 className="text-xl font-medium mt-12">
                    Permissions
                </h2>
                <p className="mt-4 text-muted-foreground">
                    TabQ requires certain browser permissions to function properly:
                </p>
                <ul className="list-disc ml-8 mt-4 text-muted-foreground">
                    <li><strong>Storage:</strong> To save your workspaces, collections, and preferences locally</li>
                    <li><strong>Tabs:</strong> To access tab information for organizing and managing your tabs</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                    These permissions are used solely to provide the extension&apos;s functionality and do not involve any data transmission to external servers.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Third-Party Services
                </h2>
                <p className="mt-4 text-muted-foreground">
                    TabQ does not integrate with any third-party analytics, advertising, or tracking services.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Data Export and Deletion
                </h2>
                <p className="mt-4 text-muted-foreground">
                    You have full control over your data:
                </p>
                <ul className="list-disc ml-8 mt-4 text-muted-foreground">
                    <li><strong>Export:</strong> You can export your data at any time for backup or transfer purposes</li>
                    <li><strong>Delete:</strong> Uninstalling the extension will remove all locally stored data. You can also clear data through your browser settings</li>
                </ul>

                <h2 className="text-xl font-medium mt-12">
                    Changes to This Policy
                </h2>
                <p className="mt-4 text-muted-foreground">
                    We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Contact
                </h2>
                <p className="mt-4 text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at support@tabq.io.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default Privacy;
