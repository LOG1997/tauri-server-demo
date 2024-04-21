import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from '@/router';
function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", { name }));
    }

    return (
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    );
}

export default App;
