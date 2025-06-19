export default function AlertBox({ type = "info", children }) {
    const baseClass =
        "px-4 py-3 rounded-2xl mb-6 shadow-lg border text-sm"

    const styles = {
        success: "bg-green-100 border-green-400 text-green-700",
        error: "bg-red-100 border-red-400 text-red-700",
        info: "bg-blue-100 border-blue-400 text-blue-700",
    }

    return (
        <div className={`${baseClass} ${styles[type] || styles.info}`}>
            {children}
        </div>
    )
}
