//Action creator

export const selectSong = (song) => {
    //return an action (plain JavaScript object)
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

