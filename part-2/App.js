const App = () => (
    <div>
        <Tweet username="Jayne" date="Jul 26, 2020" message="My first tweet" />
        <Tweet username="Michael" date="Jul 26, 2020" message="My first PC bild" />
        <Tweet username="Mitchelle" date="Jul 27, 2020" message="I love noodles" />

    </div>
)



ReactDOM.render(<App />, document.getElementById("root"))