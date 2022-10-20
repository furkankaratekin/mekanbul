var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa', { 
      'baslik': 'Anasayfa',
      'sayfaBaslik':{
        'siteAd': 'MekanBul',
        'slogan': 'Civardaki Mekanları Keşfet'
      },
      'mekanlar': [
        {
          'ad': 'Starbucks',
          'puan': 4,
          'adres': 'Centrum Garden AVM',
          'imkanlar': ['Dünya Kahveleri','Kek','Pasta'],
          'mesafe': '10km'
        },
        {
          'ad': 'Sdü Doğu Cafe',
          'puan': 5,
          'adres': 'SDÜ Batı Kampüsü',
          'imkanlar': ['Çay', 'Kahve', 'Tost'],
          'mesafe': '1km'
        },
        {
          'ad': 'Lenitivo',
          'puan': 3,
          'adres': 'İyaşpark AVM',
          'imkanlar': ['Latte', 'Americano', 'Mocha'],
          'mesafe': '1km'
        }
      ]   
    
    });
}

const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi', { 
      'baslik': 'Mekan Bilgisi',
      'mekanBaslik': 'Starbucks',
      'mekanDetay': {
        'ad': 'Starbucks',
        'puan': 4,
        'adres': 'Centrum Garden AVM',
        'saatler': [
          {
            'gunler': 'Pazartesi-Cuma',
            'acilis': '07:00',
            'kapanis': '23:00',
            'kapali': false
          },
          {
            'gunler': 'Cumartesi-Pazar',
            'acilis': '09:00',
            'kapanis': '22:00',
            'kapali': false
          }
        ],
        'imkanlar': ['Dünya Kahveleri', 'Kek', 'Pasta'],
        'koordinatlar': {
          'enlem': 37.78,
          'boylam': 30.56
        },
        'yorumlar': [
          {
            'yorumYapan': 'Furkan KARATEKİN',
            'yorumMetni': 'Vasatın üstü bir yer.Çok fazla bir beklentiye girmeyin',
            'tarih': '8 Ağustos 2022',
            'puan': 4
          }
        ]
      }     
    });
}

const yorumEkle=function(req, res, next) {
  res.render('yorumekle', { title: 'Yorum Ekle' });
}

module.exports={
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}