"use server";

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function addToSheet(formData: { name: string, phone: string, grade: string }) {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      "Ism": formData.name,
      "Telefon": `'${formData.phone}`,
      "Sinf": formData.grade,
      "Sana": new Date().toLocaleString('uz-UZ'),
    });

    return { success: true };
  } catch (error) {
    console.error("Google Sheets Xatolik:", error);
    return { success: false, error: "Xatolik yuz berdi" };
  }
}