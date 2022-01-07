import React from "react";
import EmojieElement from "./EmojieElement";
import emojipedia from "../emojipedia";

const createEmoji = (emoji) => {
    return (
        <EmojieElement
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
        />
    );
};

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            {emojipedia.map(createEmoji)}
        </div>
    );
}

export default App;
