function App() {

    const styDiv = { backgroundColor: '#343A46', color: 'white', borderRadius: '20px', padding: '20px' }
    const styInsideDiv = { backgroundColor: '#23272F', color: 'white', padding: '20px' }

    const box1 = <h1 style={{ marginBottom: '20px', marginTop: '0' }}>Quick Start</h1>
    const box2 = <p style={{ marginBottom: '25px' }}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
    const box3 = <h2>You will learn</h2>
    const box4 = <ul>
        <li >How to create and nest components</li>
        <li>How to add markup and styles</li>
        <li>How to display data</li>
        <li>How to render conditions and lists</li>
        <li>How to respond to events and update the screen</li>
        <li>How to share data between components</li>
    </ul>

    return (
        <div style={styInsideDiv}>
            {/* fontFamily: 'monospace' */}
            {box1}
            {box2}
            <div style={styDiv}>
                {box3}
                {box4}
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)