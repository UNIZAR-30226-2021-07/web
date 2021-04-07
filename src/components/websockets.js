import { useRef, useState, useEffect } from "react";

import io from 'socket.io-client';

export default function useWebSocket({ url, token }) {
    const [messages/*, setMessages*/] = useState([]);
    const socket = useRef(null);

    // TODO: POner para que el connect solo se ejecute una vez al principio
    // PROBLEMA -> Se ejecuta antes lo de abajo, socket.on... que esto, con 
    // lo que socket indefinido! -> Solucionar
    useEffect(() => {

        socket.current = io.connect(url, {
            extraHeaders: {
                Authorization: "Bearer " + token,
            }
        });

        socket.current.on('connect', function() {
            console.log('connected')
            console.log(socket)
        });

        socket.current.on('connect_error', function (e) {
            console.error('not connected', e);
        });

        socket.current.on('chat', function ({owner, msg}) {
            console.log(owner, msg);
        });

        socket.current.on('create_game', function () {
            console.log("CREATE GAME RECIBIDO");
        });

        socket.current.on('start_game', function () {
            alert('Game started');
        });

        socket.current.on('players_waiting', function (n) {
            console.log(n);
        });



        return () => {
            socket.current.close();
            socket.current = null;
        }

    }, [url, token]);
    // De esta forma el useEffect se ejecutará si cambia la url o el token

    // Funciones de recepción de mensajes del servidor: socket.on
    /*
    function onConnect() {
        console.log('connected')
    }

    function onConnectError(e) {
        console.error('not connected', e)
    }

    function onCreateGame(e) {
        console.log(e.code);
    }

    function onStartGame() {
        alert('Game started');
    }

    function onPlayersWaiting(e) {
        console.log(e.n + " players-waiting");
    }

    */
    return {
        socket,
        messages,
    };
}