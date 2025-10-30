export default function AuthLayout({ children }) {
    return (
        <div className="flex h-screen">
            <main>
                {children}
            </main>
        </div>
    );
}
