$(document).ready(function () {

    // Use jQuery to get a reference to `load-songs`
    const loadBtn = $('#load-songs');
    console.log(loadBtn);
    // Use jQuery to get a reference to `song-list`
    const songList = $('#song-list');

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
    const goGetTheData = () => {
        $.ajax("/songs.json")
            .then(songs => {
                console.log(songs);
                songs.songs.forEach(song => {
                    console.log(song);
                    songList.append(
                        `<section class="song">
                            <h1 class="song__title">${song.title}</h1>
                            <section class="song__description">
                                Performed by ${song.artist} on the album ${song.album}
                            </section>
                        </section>`
                    )
                })
            })
            
    }




    loadBtn.click(goGetTheData);

    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
});

