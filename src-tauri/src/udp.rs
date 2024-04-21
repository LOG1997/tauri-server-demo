use lazy_static::lazy_static;
use std::net::{SocketAddr, UdpSocket};

fn new_socket(host: String) -> Result<UdpSocket, std::io::Error> {
    let socket = UdpSocket::bind(host);
    socket
}
lazy_static! {
    static ref
}
pub fn udp_client() -> std::io::Result<()> {
    let socket = new_socket("127.0.0.1:10085".to_owned())?;
    let unicast_addr = SocketAddr::new("127.0.0.1".parse().unwrap(), 10086);

    let message = b"hello world my boy";
    loop {
        // 从box中取出socket
        socket.send_to(message, unicast_addr)?;
        println!("Sent {} bytes to {}", message.len(), unicast_addr);
        std::thread::sleep(std::time::Duration::from_secs(1));
    }
}
pub fn udp_server() -> std::io::Result<()> {
    let socket = new_socket("127.0.0.1:10086".to_owned())?;
    println!("Listening on {}", socket.local_addr()?);
    // 无限循环以接收和发送数据
    let mut buf = [0u8; 1024];
    let (len, src_addr) = socket.recv_from(&mut buf)?;
    println!("Received {} bytes from {}", len, src_addr);

    loop {
        //     receive data
        let (len, src_addr) = socket.recv_from(&mut buf)?;
        println!("Received {} bytes from {}", len, src_addr);
        // send data
        socket.send_to(&buf[..len], src_addr)?;
        println!("Sent {} bytes to {}", len, src_addr);
    }
}

pub fn stop_udp_client() {}
