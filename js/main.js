Vue.createApp({
    data() {
        return {
            j_artikel: "Artikel",
            list_artikel: {},
            artikel: null,

            navbar: {
                judul: "My Portfolio",
                j1: "Articles",
                j2: "Contact",
                j3: "Skill",
            },
            header: {
                hai: "Hai...",
                desc: "Saya adalah Mahasiswa Universitas Ahmad Dahlan",
                desc2: "Selamat datang di website portfolio saya!"
            },
            contact: {
                judul: "Contact",
                a: "Alamat",
                a_desc: "Jl. Merpati 91A, Banguntapan, Yogyakarta",
                e: "Email",
                e_desc: "Wahyu2000016025@webmail.uad.ac.id",
                t: "Telp/Hp",
                t_desc: "+62 8221 7604 816",
            },
            table: {
                judul: "Skill",
                nama: ["No.", "Keahlian", "Skill"],
                list: [{
                        "keahlian": "Python",
                        "skill": "Advance",
                    },
                    {
                        "keahlian": "CSS",
                        "skill": "Intermediatte",
                    },
                    {
                        "keahlian": "HTML",
                        "skill": "Advance",
                    },
                    {
                        "keahlian": "Javascript",
                        "skill": "Advance",
                    },
                    {
                        "keahlian": "Java",
                        "skill": "Intermediatte",
                    },
                    {
                        "keahlian": "Microsoft Word",
                        "skill": "Advance",
                    }
                ]
            },

        };
    },
    methods: {
        ambilDataJson() {
            axios
                .get(
                    "https://raw.githubusercontent.com/samwahyu/tekweb2022/master/artikel/artikel.json"
                )
                .then((res) => {
                    console.log(res.data); //melihat respon data pada console browser
                    this.list_artikel = res.data; //memperbarui variabel header pada bagian data()
                })
                .catch((error) => {
                    console.log(error); //melihat error jika pengambilan data adalah gagal
                });
        },
        ambilMarkdown() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const artikel = urlParams.get('artikel');
            var converter = new showdown.Converter();
            axios
                .get(
                    "https://raw.githubusercontent.com/samwahyu/tekweb2022/master/artikel/" + artikel
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.artikel = html;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    beforeMount() {
        this.ambilDataJson(),
            this.ambilMarkdown()
    },
}).mount("#app");