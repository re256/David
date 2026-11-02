class Mario {
    public hp: number;
    public speed: number;
    public positionX: number;
    public positionY: number;
    public invincible: boolean;
    public currentform: string;

    constructor() {
        this.hp = 1;
        this.speed = 5;
        this.positionX = 0;
        this.positionY = 0;
        this.invincible = false;
        this.currentform = 'Mario';
    }

    public gerakkanan(): void {
        this.positionX += this.speed;
        console.log(`Mario ke kanan sebanyak :${this.positionX}`);
    }

    public gerakkiri(): void {
        this.positionX -= this.speed;
        console.log(`Mario ke kiri sebanyak :${this.positionX}`);
    }

    public damage(): void {
        if (this.invincible === true) {
          console.log('Mario sedang KEBAL');
        } else {
          this.hp -= 1;
          this.currentform = 'Mario';
          console.log(`Mario terkena serangan! Sisa HP: ${this.hp}. Mario kembali ke Form awal: ${this.currentform}`);
        }
    }

    public shootFireball(): void {
        if (this.currentform === 'Fire Mario') {
          console.log('Mario menembakkan bola api');
        } else {
          console.log('Tidak bisa menembakan bola api');
        }
    }
}

abstract class PowerUp {
    abstract efekbuff(mario: Mario): void;
  }

  class SuperMushroom extends PowerUp {
    efekbuff(mario: Mario): void {
      mario.hp += 1;
      mario.currentform = 'super mario';
      console.log('SuperMushroom (Jamur): Mario menjadi Super Mario, HP bertambah 1');
    }
  }
  
  class FireFlower extends PowerUp {
    efekbuff(mario: Mario): void {
      mario.hp += 1;
      mario.currentform = 'fire mario';
      console.log('FireFlower (Bunga): Mario menjadi Fire Mario, HP bertambah 1,dan dapat menembakkan bola api');
    }
  }
  
  class SuperStar extends PowerUp {
    efekbuff(mario: Mario): void {
      mario.invincible = true;
      console.log('SuperStar (Bintang): Mario masuk ke Mode Invincible dan Kebal terhadap serangan');
    }
  }
  
  const player1 = new Mario();
  
  console.log("GAME DIMULAI");
  player1.gerakkanan(); 
  
  console.log("MENDAPATKAN ITEM");
  const jamur = new SuperMushroom();
  jamur.efekbuff(player1);
  
  const bunga = new FireFlower(); 
  bunga.efekbuff(player1); 
  player1.shootFireball(); 
  
  const bintang = new SuperStar(); 
  bintang.efekbuff(player1); 
  
  console.log("MUSUH MENYERANG");
  player1.damage(); 
  
  console.log("EFEK BINTANG HABIS");
  player1.invincible = false;
  player1.damage();