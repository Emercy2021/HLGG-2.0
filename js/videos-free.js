/**
 * Дефолтное время кручения 22 сек.
 *
 * Длина кручения 22 сек:
 * 'video.webm'
 *
 * Длина кручения 22 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4]
 *
 * Длина кручения 30 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4, 30]
 *
 * Выберется случайное видео из списка, рандомится только при перезапуске всего списка видосов:
 * () => p5Wheel.random([
 *    ['video.webm', 4, 30],
 *    ['video.webm', 45],
 * ]),
 */
const videosFree = [
    () => p5Wheel.random([
        ['videos/[Re-upload] [1080p] HONK HONK.mp4', 0, 25],
        ['videos/[SFM] Shrekophone.mp4', 0, 32],
        ['videos/01.mp4', 0, 30],
        ['videos/02.mp4', 0, 28],
        ['videos/03.mp4', 0, 27],
        ['videos/04.mp4', 0, 28],
        ['videos/06.mp4', 0, 27],
        ['videos/9MM x LOLI SHIGURE UI.mp4', 0, 27],
        ['videos/17.mp4', 0, 27],
        ['videos/18.mp4', 0, 25],
        ['videos/19.mp4', 0, 32],
        ['videos/All Star but they don't stop coming pitch corrected.mp4', 0, 30]   
    ])
    
];
