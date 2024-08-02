export default ({label, ...props}) => {
    return (
        <label className="flex flex-row gap-4 justify-center text-white">
            <input type="checkbox"/> {label}
        </label>
    );
}