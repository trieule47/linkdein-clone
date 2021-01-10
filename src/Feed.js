import React from 'react'
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';


function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOption">
                    <InputOption Icon={ImageIcon} title="Photo" color="lightblue"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="rgb(204, 204, 0)"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="grey"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="rgb(102, 255, 51)"/>
                </div>
            </div>
        </div>
    )
}

export default Feed
