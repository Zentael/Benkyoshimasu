export class HiraganaService {
    romaji = {
        '': {
            a: 'a',
            i: 'i',
            u: 'u',
            e: 'e',
            o: 'o',
        },
        K: {
            a: 'ka',
            i: 'ki',
            u: 'ku',
            e: 'ke',
            o: 'ko',
        },
        S: {
            a: 'sa',
            i: 'shi',
            u: 'su',
            e: 'se',
            o: 'so',
        },
        T: {
            a: 'ta',
            i: 'chi',
            u: 'tsu',
            e: 'te',
            o: 'to',
        },
        N: {
            a: 'na',
            i: 'ni',
            u: 'nu',
            e: 'ne',
            o: 'no',
        },
        H: {
            a: 'ha',
            i: 'hi',
            u: 'fu',
            e: 'he',
            o: 'ho',
        },
        M: {
            a: 'ma',
            i: 'mi',
            u: 'mu',
            e: 'me',
            o: 'mo',
        },
        Y: {
            a: 'ya',
            u: 'yu',
            o: 'yo',
        },
        R: {
            a: 'ra',
            i: 'ri',
            u: 'ru',
            e: 're',
            o: 'ro',
        },
        W: {
            a: 'wa',
            o: 'wo',
        },
        n: {
            '': 'n',
        },
        K11: {
            a: 'ga',
            i: 'gi',
            u: 'gu',
            e: 'ge',
            o: 'go',
        },
        S11: {
            a: 'za',
            i: 'ji',
            u: 'zu',
            e: 'ze',
            o: 'zo',
        },
        T11: {
            a: 'da',
            i: 'dji',
            u: 'dzu',
            e: 'de',
            o: 'do',
        },
        H11: {
            a: 'ba',
            i: 'bi',
            u: 'bu',
            e: 'be',
            o: 'bo',
        },
        H0: {
            a: 'pa',
            i: 'pi',
            u: 'pu',
            e: 'pe',
            o: 'po',
        },
        KY: {
            a: 'kya',
            u: 'kyu',
            o: 'kyo',
        },
        SH: {
            a: 'sha',
            u: 'shu',
            o: 'sho',
        },
        CH: {
            a: 'cha',
            u: 'chu',
            o: 'cho',
        },
        NY: {
            a: 'nya',
            u: 'nyu',
            o: 'nyo',
        },
        HY: {
            a: 'hya',
            u: 'hyu',
            o: 'hyo',
        },
        MY: {
            a: 'mya',
            u: 'myu',
            o: 'myo',
        },
        RY: {
            a: 'rya',
            u: 'ryu',
            o: 'ryo',
        },
        K11Y: {
            a: 'gya',
            u: 'gyu',
            o: 'gyo',
        },
        S11Y: {
            a: 'ja',
            u: 'ju',
            o: 'jo',
        },
        T11Y: {
            a: 'dja',
            u: 'dju',
            o: 'djo',
        },
        H11Y: {
            a: 'bya',
            u: 'byu',
            o: 'byo',
        },
        H0Y: {
            a: 'pya',
            u: 'pyu',
            o: 'pyo',
        },
    };

    getRomaji(){
        return this.romaji;
    }
}
