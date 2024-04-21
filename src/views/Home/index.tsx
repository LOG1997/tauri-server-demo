import React, { useEffect } from 'react'
import { invoke } from "@tauri-apps/api/core";
import { getCurrent } from '@tauri-apps/api/window';
import { Button } from "@/components/ui/button"

export default function Home() {
    async function startTCPServer() {
        console.log('startTCPServer')
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        await invoke("udp_server")
    }
    getCurrent().listen('my-window-event', ({ event, payload }) => {
        console.log('event--payload', event, payload)
    });

    // useEffect(() => {
    //     getCurrent()
    // }, [])
    return (
        <div>
            <h3>Home</h3>

            <Button onClick={startTCPServer}>启动TCPServer</Button>
        </div>
    )
}
