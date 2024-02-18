import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import ChatComponent from '../ChatField';
import { useObservable } from '../../observable/useObservable';
import { roomService, storeRoomService } from '../../services/roomService';
import { storeAuthService } from '../../services/authService';

const RoomTabs = () => {
    const currentUserId = useObservable(storeAuthService.currentUserId);
    const userRooms = useObservable(storeRoomService.userRooms);
    const [activeKey, setActiveKey] = useState(userRooms?.[0]?.id);

    useEffect(() => {
        if (currentUserId) {
            roomService.getUserRooms(currentUserId);
        }
    }, []);

    return (
        <Container fluid>
            <Tabs
                id="rooms-tabs"
                activeKey={ activeKey }
                onSelect={ (k) => setActiveKey(k) }
                className="mb-3"
            >
                { userRooms?.map((room) => (
                    <Tab eventKey={ room.id.toString() } title={ room.name } key={ room.id }>
                        <ChatComponent />
                    </Tab>
                )) }
            </Tabs>
        </Container>
    );
};

export default RoomTabs;
