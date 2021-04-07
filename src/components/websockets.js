import { useRef, useState, useEffect } from "react";

import io from 'socket.io-client';

export default function useWebSocket({ url, token }) {
    const [messages, setMessages] = useState([]);
    const socket = useRef(null);

    useEffect(() => {

        socket.current = io.connect(url, {
            extraHeaders: {
                Authorization: "Bearer " + token,
            }
        });

        socket.current.on('connect', function() {
            console.log('connected')
        });

        socket.current.on('connect_error', function (e) {
            console.error('not connected', e);
        });

        socket.current.on('create_game', function ({code}) {
            console.log("CREATE GAME RECIBIDO");
            console.log(code);
        });

        socket.current.on('start_game', function () {
            alert('Game started');
        });

        socket.current.on('players_waiting', function (n) {
            console.log(n);
        });

        socket.current.on('chat', function ({owner, msg}) {
            console.log(owner, msg);
            setMessages((prev) => [...prev, {userid: owner, text: msg,}]);
        });



        return () => {
            socket.current.close();
            socket.current = null;
        }

    }, [url, token]);
    // De esta forma el useEffect se ejecutará si cambia la url o el token

    return {
        socket,
        messages,
    };
}