import { IPerson } from "../app/page";

export function prepareInstagram(people: IPerson[]) {
    return people.map(person => {
        switch (person.contestantdetails.fullName) {
            //man
            case 'Tolga Kandemir':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/tolgakandemirrr/";
                return person;
            case 'Kaan Seyhan':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/kaanseyhan_/";
                return person;
            case 'Oğulcan Yılmaz':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/yetoffical/";
                return person;
            case 'Sedat Polat':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/espiresmi/";
                return person;
            case 'Zeyd Gümüştutan':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/zeydmi/";
                return person;
            case 'Bilek Orundaş':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/bilekorundas/";
                return person;
            case 'Erhan Saffar':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/erhansaffar/";
                return person;
            case 'Serdar Aycan':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/serdaraycannn/";
                return person;
            case 'Erol Yıldırım':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/byerolyildirimofficial/";
                return person;
            //women  
            case 'Aybüke Çangal':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/aybukeeyiim/";
                return person;
            case 'Cansel Ayanoğlu':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/cansel.ayanoglu/";
                return person;
            case 'Yaren Dağ':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/yarendags/";
                return person;
            case 'Tuğçe Aleyna':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/tugcealeynaa/";
                return person;
            case 'Ayşenur İnam':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/aysenurinam/";
                return person;
            case 'Şeydanur Tunç':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/shera.snt/";
                return person;
            case 'Merve Demirbilek':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/merveeedemirbilek/";
                return person;
            case 'Simge Nur Erkoç':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/simgenurerkocc/";
                return person;
            case 'Yeliz Açıkel':
                person.contestantdetails.instagramUrl = "https://www.instagram.com/ylzacikel/";
                return person;
            default:
                return person;
        }
    })

}