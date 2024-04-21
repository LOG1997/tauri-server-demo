mod udp;
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

// remember to call `.manage(MyState::default())`
#[tauri::command]
async fn udp_client() {
    udp::udp_client().unwrap();
}
#[tauri::command]
async fn udp_server() {
    udp::udp_server().unwrap();
}
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, udp_client, udp_server])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
