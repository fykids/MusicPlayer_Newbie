const lyrics = [
    { start: 0, end: 13, text: "Intro" },
    { start: 13, end: 21, text: "Kala rintangan masih kulawan" },
    { start: 21, end: 28, text: "Dalam belenggu bagai menyelimuti hari" },
    { start: 28, end: 34, text: "Dengarkan hati tak semanis mimpi" },
    { start: 34, end: 41, text: "Harus berjuang, meski berat kulewati" },
    { start: 41, end: 47, text: "Uuuu... Uuu..." },
    { start: 47, end: 54, text: "Semangat datang menyelamatkanku dari" },
    { start: 54, end: 61, text: "Kejamnya dunia yang menolakku untuk berdiri" },
    { start: 61, end: 67, text: "Kuatkan langkahku, Tuhan, jalani hidup ini" },
    { start: 67, end: 74, text: "Bersama doa ibuku yang selalu menemani" },
    { start: 74, end: 82, text: "Tak pernah ku menyerah dengan keadaan" },
    { start: 82, end: 92, text: "Karena ku terus lakukan aktivitas tanpa batas" },
    { start: 92, end: 95, text: "Ku masih berjalan walau dalam tekanan" },
    { start: 95, end: 99, text: "Lika-liku Tuhan kuatkan, doa kupanjatkan" },
    { start: 99, end: 102, text: "Syukur selalu pastikan, jatuh pasti bangkitkan" },
    { start: 102, end: 106, text: "Melangkah, tak pernah aku menyerah" },
    { start: 106, end: 113, text: "Kuatkan jiwa, bertahan hingga akhir" },
    { start: 113, end: 118, text: "Tuhan, aku butuh kekuatan" },
    { start: 118, end: 124, text: "Untuk menembus segala tantangan di depan" },
    { start: 124, end: 131, text: "Melangkah, tak pernah aku menyerah" },
    { start: 131, end: 138, text: "Kuatkan jiwa, bertahan hingga akhir" },
    { start: 138, end: 145, text: "Tuhan, aku butuh kekuatan" },
    { start: 145, end: 152, text: "Untuk menembus segala tantangan di depan" },
    { start: 152, end: 159, text: "Ku masih berjalan walau dalam tekanan" },
    { start: 159, end: 166, text: "Lika-liku Tuhan kuatkan, doa kupanjatkan" },
    { start: 166, end: 171, text: "Syukur selalu pastikan, jatuh pasti bangkitkan" },
    { start: 171, end: 178, text: "Melangkah, tak pernah aku menyerah" },
    { start: 178, end: 185, text: "Kuatkan jiwa, bertahan hingga akhir" },
    { start: 185, end: 191, text: "Tuhan, aku butuh kekuatan" },
    { start: 191, end: 198, text: "Untuk menembus segala tantangan di depan" }
];

const lyricsContainer = document.getElementById('lyrics');
const audioPlayer = document.getElementById('musicPlayer');

audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    let activeLyrics = lyrics.find(lyric => currentTime >= lyric.start && currentTime <= lyric.end);

    if (activeLyrics) {
        lyricsContainer.innerHTML = `<p class="highlight">${activeLyrics.text}</p>`;
    } else {
        lyricsContainer.innerHTML = '';
    }
});