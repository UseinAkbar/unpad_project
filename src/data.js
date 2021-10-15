import karyaBerkreasi from './unpad_asset/exhibitionImages/karyaBerkreasi.png'
import karyaBergaya1 from './unpad_asset/exhibitionImages/karyaBergaya1.jpeg'
import karyaBergaya2 from './unpad_asset/exhibitionImages/karyaBergaya2.jpg'
import karyaMenerka from './unpad_asset/exhibitionImages/karyaMenerka.jpg'
import karyaBerstrategi from './unpad_asset/exhibitionImages/karyaBerstrategi.jpg'
import berceritera from '../src/unpad_asset/exhibitionImages/thumbnail/berceritera.png'
import berdendang from '../src/unpad_asset/exhibitionImages/thumbnail/berdendang.png'
import bergaya from '../src/unpad_asset/exhibitionImages/thumbnail/bergaya.png'
import berkreasi from '../src/unpad_asset/exhibitionImages/thumbnail/berkreasi.png'
import berstrategi from '../src/unpad_asset/exhibitionImages/thumbnail/berstrategi.png'
import menerka from '../src/unpad_asset/exhibitionImages/thumbnail/menerka.png'


const data = [
    {
        id: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1134508732&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        title: 'POA Berceritera',
        thumbnail: berceritera,
        winner: 'Emi, Naadir, Athhar, Cele',
        angkatan: 2019,
    },
    {
        id: 'ZX7t41ZoPhc',
        title: 'POA Berdendang',
        thumbnail: berdendang,
        winner: 'Farhan & Abdul',
        angkatan: 2018,
    },
    {
        id: [karyaBergaya1, karyaBergaya2],
        title: 'POA Bergaya',
        thumbnail: bergaya, 
        winner: 'Karisha Azhar Fauzi',
        angkatan: 2020,
    },
    {
        id: karyaBerkreasi,
        title: 'POA Berkreasi',
        thumbnail: berkreasi,  
        winner: 'Didi Permana',
        angkatan: 2019,
    },
    {
        id: karyaMenerka,
        title: 'POA Menerka',
        thumbnail: menerka, 
        winner: 'Wahib Al Ghifari',
        angkatan: 2020,
    },
    {
        id: karyaBerstrategi,
        title: 'POA Berstrategi',
        thumbnail: berstrategi,
        winner: 'Naufal Basuki',
        source: 'https://www.youtube.com/watch?v=ICuiq-yVh6I',
        angkatan: 2020,
    }
]

export default data