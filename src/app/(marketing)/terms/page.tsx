import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Link from "next/link";

const TermsPage = () => {
    return (
        <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
                    Terms of Service
                </h1>
                <p className="text-sm mb-2 italic mt-20">
                    Last updated: December 27, 2025
                </p>
                <p className="mt-4">
                    Welcome to TabQ. By using our browser extension, you agree to these Terms of Service.
                </p>

                <h2 className="text-xl font-medium mt-8">
                    1. Acceptance of Terms
                </h2>
                <p className="mt-4 text-muted-foreground">
                    By installing or using TabQ, you agree to be bound by these terms. If you do not agree to these terms, please do not use the extension.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    2. Description of Service
                </h2>
                <p className="mt-4 text-muted-foreground">
                    TabQ is a browser extension that helps you organize your browser tabs into workspaces and collections. The extension stores all data locally on your device.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    3. Use of the Extension
                </h2>
                <p className="mt-4 text-muted-foreground">
                    You agree to use TabQ only for lawful purposes and in accordance with these terms. You agree not to:
                </p>
                <ul className="list-disc ml-8 mt-4 text-muted-foreground">
                    <li>Modify, reverse engineer, or attempt to extract the source code of the extension</li>
                    <li>Use the extension in any way that could damage, disable, or impair the extension</li>
                    <li>Redistribute or sell the extension without permission</li>
                </ul>

                <h2 className="text-xl font-medium mt-12">
                    4. Intellectual Property
                </h2>
                <p className="mt-4 text-muted-foreground">
                    TabQ and its original content, features, and functionality are owned by the developer and are protected by international copyright, trademark, and other intellectual property laws.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    5. User Data
                </h2>
                <p className="mt-4 text-muted-foreground">
                    All data you create using TabQ (workspaces, collections, saved tabs) is stored locally on your device. You are responsible for backing up your own data. We do not have access to your data and cannot recover it if lost.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    6. Disclaimer of Warranties
                </h2>
                <p className="mt-4 text-muted-foreground">
                    TabQ is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied. We do not guarantee that the extension will be error-free, secure, or uninterrupted.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    7. Limitation of Liability
                </h2>
                <p className="mt-4 text-muted-foreground">
                    In no event shall TabQ or its developer be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, arising out of your use of the extension.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    8. Changes to Terms
                </h2>
                <p className="mt-4 text-muted-foreground">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the extension after any changes constitutes acceptance of the new terms.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    9. Termination
                </h2>
                <p className="mt-4 text-muted-foreground">
                    You may stop using TabQ at any time by uninstalling the extension. We reserve the right to discontinue the extension at any time without notice.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    10. Contact
                </h2>
                <p className="mt-4 text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us at support@tabq.io.
                </p>

                <p className="mt-12 font-medium">
                    By using TabQ, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default TermsPage;
