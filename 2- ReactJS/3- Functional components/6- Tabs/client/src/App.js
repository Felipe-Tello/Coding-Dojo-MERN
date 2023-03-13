import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div>
      <Tabs labelContent={[{label: "Tab 1", content: "Tab 1 content is showing here"},{label: "Tab 2", content: "Tab 2 content is showing here"},{label: "Tab 3", content: "Tab 3 content is showing here"}]}></Tabs>
    </div>
  );
}

export default App;
