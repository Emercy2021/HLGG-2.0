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
    ['videos/[Re-upload] [1080p] HONK HONK.mp4', 38, 26],
    ['videos/[SFM] Shrekophone.mp4', 46, 25],
    // ['videos/HOOD NARUTO  pt.4 (full video) naruto vs pain.mp4', 23, 32],
    'videos/01.mp4',
    ['videos/02.mp4', 0, 25],
    () => p5Wheel.random([
        ['videos/03.mp4', 129],
        ['videos/04.mp4.mp4', 75, 30],
    ]),
    'videos/06.mp4',
    'videos/9MM x LOLI SHIGURE UI.mp4.mp4',
    'videos/17.mp4',

    ['videos/18.mp4', 0, 25],
    ['videos/19.mp4.mp4', 0, 32],
    ['videos/All Star but they don't stop coming pitch corrected.mp4', 0, 30],
    ['videos/arabic.mp4', 0, 27],
    ['videos/best Chika meme ever   anime characters in Chika dance MV.mp4', 0, 28],
    ['videos/BOOMBASTIC.mp4', 0, 27],
    ['videos/CHIKA VIBES   Kaguya-sama Love is War.mp4', 0, 34],
    ['videos/chipichapa.mp4', 0, 30],
    ['videos/Country Roads cover by Mario Mario.mp4', 0, 27],
    ['videos/dendi.mp4', 0, 29],
    ['videos/Dj Eban.mp4', 0, 29],
    ['videos/faina.mp4', 0, 31],
    ['videos/fish.mp4', 0, 41],
    ['videos/gena bukin.mp4', 0, 37],
    ['videos/greg.mp4', 0, 21],
    ['videos/HOOD NARUTO  pt.4 (full video) naruto vs pain.mp4', 0, 29],
    ['videos/I'm a Bee.mp4', 0, 24],
    ['videos/JOJO'S BIZARRE MAKEUP TUTORIAL.mp4', 0, 30],
    ['videos/khajit.mp4', 0, 25],
    ['videos/lotar.mp4', 0, 32],
    ['videos/love Blade Runner 2049 edit.mp4', 0, 24],
    ['videos/milos.mp4', 0, 24],
    ['videos/Music make you lose control triangle.mp4', 0, 27],
    ['videos/Nope..mp4', 0, 27],
    ['videos/Pinoki - Pingana (Havana by Camila Cabello ft. Young Thug Remix).mp4', 0, 23],
    ['videos/Putin walking meme (Full version).mp4', 0, 28],
    ['videos/RONDONDON  (official music video) Lil John & Eastside boyz- Get Low (cover).mp4', 0, 16],
    ['videos/Ryan Gosling in Stalker.mp4', 0, 15],
    ['videos/ryzen.mp4', 0, 36],
    ['videos/Sailor Moon OP1.mp4', 0, 30],
    ['videos/Skooma Addicted Khajiit Inhales Skooma.mp4', 0, 17],
    ['videos/Sleepwalker - Danila Bagrov edit.mp4', 0, 27],
    ['videos/slovopacana.mp4', 0, 30],
    ['videos/Walter.mp4', 0, 25],
    ['videos/x-men.mp4', 0, 28],
    ['videos/дора, МЭЙБИ БЭЙБИ — Не исправлюсь.mp4', 0, 28],
    ['videos/Заминированный тапок- Remix.mp4', 0, 29],
    ['videos/Легендарное РУКОПОЖАТИЕ.mp4', 0, 29],
    ['videos/Мэддисон - Shooting Stars.mp4', 0, 29],
    ['videos/Мэддисон дрифтит под Фонк.mp4', 0, 29],
    ['videos/Папич-марш  прощание славянки .9мая.mp4', 0, 29],
    ['videos/Стрим по готике 2 от мэддисона.mp4', 0, 29],
    ['videos/Сыновья России. Кто пчелок уважает.mp4', 0, 29],
    ['videos/Танец под волчок из  Что Где Когда.mp4', 0, 29],
    ['videos/Тони не спал с тобой. Тонилайф.mp4', 0, 29],
    ['videos/учит крутить рулём под phonk.mp4', 0, 29],
];
