export default function jsx4() {
    const subtitle = "Subtitle"
    const html = returnHtml();

    function returnHtml() {
        return (
            <div>
                <h1>Integration JS and JSX</h1>
                <h2>{subtitle}</h2>
                <h3>{Math.max(1, 2, 9, 3)}</h3>
                <h4>{between(5, 1, 10)}</h4>
            </div>
        )
    }

    function between(value, min, max) {
        if (value >= min && value <= max) {
            return "yes"
        } else {
            return "no"
        }
    } 

    return (
        html
    )
}