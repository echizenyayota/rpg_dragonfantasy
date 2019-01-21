'use strict';

 {
     class DragonFantasy {
         constructor(name, job, hp) {
            this.name = name;
            this.job = job;
            this.hp = hp;
        }

        show() {
            return `${this.name}の職業は${this.job}。現在のHPは${this.hp}です。`;
        }

     }

     const hero = new DragonFantasy('Tom', '勇者', 100);
     console.log(hero.show());

     class DragonFantasyMp extends DragonFantasy {
         constructor(mp){    // 子クラスのコンストラクタが親クラスのコンストラクタを上書き
            super();
            this.mp = mp;
         }

         showMp() {
            return `${this.job}の最初のMPは${this.mp}です。`;   // 子クラスが上書きしているため。this.jobが定義されていない。MPは初期化されずthis.mpがthis.nameに上書きしているだけ
         }

     }

     const heromp = new DragonFantasyMp('Tom', '勇者', 100, 0);
     
 }
