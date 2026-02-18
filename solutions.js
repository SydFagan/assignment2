const listeningdata = [

{
title: "Sunset Dreams",
artist: "Luna Ray",
genre: "pop",
streams: 4200000,
rating: 4.7,
duration: 210
},
{
title: "Neon Lights",
artist: "Luna Ray",
genre: "pop",
streams: 3800000,
rating: 4.5,
duration: 195
},
{
title: "City Hearts",
artist: "Max Sterling",
genre: "pop",
streams: 5100000,
rating: 4.6,
duration: 225
},
{
title: "Dancing Shadows",
artist: "Aria Chen",
genre: "pop",
streams: 2900000,
rating: 4.4,
duration: 200
},
{
title: "Summer Vibes",
artist: "Aria Chen",
genre: "pop",
streams: 6200000,
rating: 4.8,
duration: 215
},
// Rock Genre (5 songs)
{
title: "Thunder Roads",
artist: "The Rebels",
genre: "rock",
streams: 3400000,
rating: 4.3,
duration: 245
},
{
title: "Breaking Free",
artist: "The Rebels",
genre: "rock",
streams: 4100000,
rating: 4.5,
duration: 230
},
{
title: "Electric Storm",
artist: "Luna Ray",
genre: "rock",
streams: 2700000,
rating: 4.2,
duration: 255
},
{
title: "Midnight Run",
artist: "Jake Rivers",
genre: "rock",
streams: 3900000,
rating: 4.6,
duration: 220
},
{
title: "Rebel Heart",
artist: "Jake Rivers",
genre: "rock",
streams: 5200000,
rating: 4.7,
duration: 235
},
// Hip-Hop Genre (5 songs)
{
title: "Flow State",
artist: "MC Dynamo",
genre: "hip-hop",
streams: 7800000,
rating: 4.8,
duration: 190
},
{
title: "Street Poet",
artist: "MC Dynamo",
genre: "hip-hop",
streams: 6500000,
rating: 4.6,
duration: 205
},
{
title: "Golden Era",
artist: "Lyric Master",
genre: "hip-hop",
streams: 4200000,
rating: 4.4,
duration: 210
},
{
title: "Rhythm & Truth",
artist: "Lyric Master",
genre: "hip-hop",
streams: 5600000,
rating: 4.7,
duration: 198
},
{
title: "Urban Legends",
artist: "Max Sterling",
genre: "hip-hop",
streams: 3800000,
rating: 4.3,
duration: 215
},
// Electronic Genre (5 songs)
{
title: "Digital Dreams",
artist: "Synth Wave",
genre: "electronic",
streams: 5900000,
rating: 4.5,
duration: 188
},
{
title: "Neon Pulse",
artist: "Synth Wave",
genre: "electronic",
streams: 6700000,
rating: 4.7,
duration: 192
},
{
title: "Cyber City",
artist: "Aria Chen",
genre: "electronic",
streams: 4500000,
rating: 4.4,
duration: 205
},
{
title: "Future Beats",
artist: "DJ Nova",
genre: "electronic",
streams: 8100000,
rating: 4.9,
duration: 195
},
{
title: "Voltage",
artist: "DJ Nova",
genre: "electronic",
streams: 7200000,
rating: 4.6,
duration: 200
},
// R&B Genre (5 songs)
{
title: "Smooth Operator",
artist: "Velvet Voice",
genre: "r&b",
streams: 3200000,
rating: 4.5,
duration: 220
},
{
title: "Midnight Groove",
artist: "Velvet Voice",
genre: "r&b",
streams: 4600000,
rating: 4.7,
duration: 235
},
{
title: "Soul Fire",
artist: "Luna Ray",
genre: "r&b",
streams: 2800000,
rating: 4.3,
duration: 210
},
{
title: "Love Language",
artist: "Aria Chen",
genre: "r&b",
streams: 5400000,
rating: 4.8,
duration: 225
},
{
title: "Feel The Vibe",
artist: "Max Sterling",
genre: "r&b",
streams: 3900000,
rating: 4.4,
duration: 215
},
// Indie Genre (5 songs)
{
title: "Whispering Pines",
artist: "Forest Echo",
genre: "indie",
streams: 1900000,
rating: 4.6,
duration: 240
},
{
title: "Coffee Shop Tales",
artist: "Forest Echo",
genre: "indie",
streams: 2100000,
rating: 4.4,
duration: 225
},
{
title: "Vintage Memories",
artist: "The Wanderers",
genre: "indie",
streams: 1600000,
rating: 4.2,
duration: 235
},
{
title: "Paper Planes",
artist: "The Wanderers",
genre: "indie",
streams: 2400000,
rating: 4.5,
duration: 220
},
{
title: "Golden Hour",
artist: "Luna Ray",
genre: "indie",
streams: 3100000,
rating: 4.7,
duration: 215
}
];

console.log("=== StreamBeats Data Overview ===");
console.log("Total Songs:", listeningData.length);
console.log("Unique Artists:", [...new Set(listeningData.map(s =>
s.artist))].length);
console.log("Genres:", [...new Set(listeningData.map(s => s.genre))].join(", "));
console.log("Stream Range:", Math.min(...listeningData.map(s =>
s.streams)).toLocaleString(),
"to", Math.max(...listeningData.map(s => s.streams)).toLocaleString());
console.log("Rating Range:", Math.min(...listeningData.map(s => s.rating)),
"to", Math.max(...listeningData.map(s => s.rating)));
console.log("Duration Range:", Math.min(...listeningData.map(s => s.duration)),
"to", Math.max(...listeningData.map(s => s.duration)), "seconds");


const task1 = () => {


    const artistTotals = listeningData.reduce((acc, song) => {
        acc[song.artist] = (acc[song.artist] || 0) + song.streams;
        return acc;
    }, {});

    return Object.entries(artistTotals).map(([artist, totalStreams]) => ({
        artist,
        totalStreams,
        tier:
            totalStreams >= 10000000 ? "Platinum" :
            totalStreams >= 5000000 ? "Gold" :
            "Silver"
    }));
};

document.getElementById("task1Answer").innerHTML =
    JSON.stringify(task1(), null, 2);



const task2 = () => {

    const grouped = listeningData.reduce((acc, song) => {

        if (!acc[song.genre]) {
            acc[song.genre] = { totalStreams: 0, totalRating: 0, count: 0 };
        }

        acc[song.genre].totalStreams += song.streams;
        acc[song.genre].totalRating += song.rating;
        acc[song.genre].count++;

        return acc;

    }, {});

   
    return Object.entries(grouped).reduce((result, [genre, data]) => {

        const avgStreams = data.totalStreams / data.count;
        const avgRating = data.totalRating / data.count;
        const engagementScore = +((avgStreams / 1000000) * avgRating).toFixed(2);

        result[genre] = {
            avgStreams,
            avgRating,
            songCount: data.count,
            engagementScore
        };

        return result;

    }, {});
};

document.getElementById("task2Answer").innerHTML =
    JSON.stringify(task2(), null, 2);


const task3 = () => {

    const windows = listeningData
        .map((_, index, arr) => {

            if (index > arr.length - 4) return null;

            const slice = arr.slice(index, index + 4);

            const totalScore = slice.reduce((sum, song) =>
                sum + (song.streams / 1000) + (song.rating * 500)
            , 0);

            return {
                startIndex: index,
                endIndex: index + 3,
                songs: slice.map(s => s.title),
                totalScore
            };

        })
        .filter(Boolean);

    return windows.reduce((max, current) =>
        current.totalScore > max.totalScore ? current : max
    );
};

document.getElementById("task3Answer").innerHTML =
    JSON.stringify(task3(), null, 2);


const task4 = () => {

    const grouped = listeningData.reduce((acc, song) => {

        if (!acc[song.artist]) acc[song.artist] = {};

        if (!acc[song.artist][song.genre]) {
            acc[song.artist][song.genre] = { totalStreams: 0, count: 0 };
        }

        acc[song.artist][song.genre].totalStreams += song.streams;
        acc[song.artist][song.genre].count++;

        return acc;

    }, {});

    return Object.entries(grouped)
        .map(([artist, genresObj]) => {

            const genres = Object.keys(genresObj);

            if (genres.length < 3) return null;

            const genreStats = genres.map(genre => ({
                genre,
                avgStreams:
                    genresObj[genre].totalStreams / genresObj[genre].count
            }));

            const bestGenre = genreStats.reduce((best, current) =>
                current.avgStreams > best.avgStreams ? current : best
            );

            return {
                artist,
                genres,
                genreCount: genres.length,
                bestGenre: bestGenre.genre,
                bestGenreAvgStreams: bestGenre.avgStreams
            };

        })
        .filter(Boolean);
};

document.getElementById("task4Answer").innerHTML =
    JSON.stringify(task4(), null, 2);



const task5 = () => {

    return listeningData
        .filter(song =>
            song.rating >= 4.3 &&
            song.streams >= 2000000 &&
            song.duration >= 180 &&
            song.duration <= 240
        )
        .map(song => ({
            title: song.title,
            artist: song.artist,
            qualityScore:
                (song.rating * 2) + (song.streams / 500000)
        }))
        .sort((a, b) => b.qualityScore - a.qualityScore)
        .slice(0, 10);
};

document.getElementById("task5Answer").innerHTML =
    JSON.stringify(task5(), null, 2);
