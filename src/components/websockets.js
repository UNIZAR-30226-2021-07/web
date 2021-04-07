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

        socket.current.onconnect  = function() {
            console.log('connected');
        }


        return () => {
            socket.current.close();
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
        socket: socket.current, 
        messages
    }
}