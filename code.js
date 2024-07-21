const AdmZip = require('adm-zip');
const fs = require('fs');

// ZIP fayl yo'li
const zipFilePath = 'test.zip';
// Parollar ro'yxati
const passwords = ['password1', '123456', 'qwerty', 'yourpassword']; // Ro'yxatga qo'shimcha parollarni qo'shing

function testPasswords(zipFilePath, passwords) {
    for (let password of passwords) {
        try {
            const zip = new AdmZip(zipFilePath);
            zip.extractAllTo('/path/to/extract', /* overwrite */ true, password);

            // Agar bu yerga yetib kelsa, parol to'g'ri bo'ldi
            console.log(`Password found: ${password}`);
            return;
        } catch (err) {
            // Parol noto'g'ri bo'lsa, xatolik chiqariladi
            console.log(`Password ${password} is incorrect.`);
        }
    }
    console.log('No valid password found.');
}

testPasswords(zipFilePath, passwords);
