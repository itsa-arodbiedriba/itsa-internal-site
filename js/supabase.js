// Supabase klienta inicializācija
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// ⚠️ Šeit ievieto savus Supabase projekta datus
const supabaseUrl = "https://knpxnqtqxavzkaaqqpni.supabase.co"
const supabaseKey = "sb_publishable_lGQehBv8c3Lc2DaxrME91A_cj1NKD03"
export const supabase = createClient(supabaseUrl, supabaseKey)

// ====== Funkcijas datu apstrādei ======

// Datu ievade (INSERT)
export async function addMessage(name, email, message) {
  const { data, error } = await supabase
    .from('messages')
    .insert([
      { name: name, email: email, message: message }
    ])
  if (error) {
    console.error("Kļūda saglabājot datus:", error.message)
    return null
  }
  return data
}

// Datu izgūšana (SELECT)
export async function getMessages() {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) {
    console.error("Kļūda izgūstot datus:", error.message)
    return []
  }
  return data
}

// Meklēšana pēc e-pasta
export async function searchByEmail(email) {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('email', email)
  if (error) {
    console.error("Kļūda meklējot:", error.message)
    return []
  }
  return data
}
