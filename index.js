const { createClient } = require('@supabase/supabase-js')

// READ ONLY KEYS FOR DEMO PURPOSES
const SUPABASE_URL = 'https://dikrobwbkooagenjcntf.supabase.co'
const SUPABASE_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpa3JvYndia29vYWdlbmpjbnRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwNjM5NjksImV4cCI6MjAwNTYzOTk2OX0.whAT-wpKZVOmtkepI2YUosCk3xD7cn-jLleSvzn6c4w`

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Try these tasks for yourself!

// 1. List all the countries in Antartica
// 2. Fetch the ISO3 code of the country with ID 3
// 3. List the countries with 'Island' in the name
// 4. Count the number of countries that start with 'Z' or 'Q'
// 5. Fetch all the Countries where continents is null

// API reference here: https://supabase.io/docs/reference/javascript/filter

const main = async () => {
  let { data, error } = await supabase
    .from('countries')
    .select('name, continent')
    .order('continent', {ascending: true})
    .range(0,10)

  if (error) {
    console.error(error)
    return
  }

  console.log(data)
}

main()

// Video guide: https://www.youtube.com/watch?v=lQ5iIxaYduI