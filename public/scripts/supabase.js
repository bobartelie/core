const { createClient } = supabase
const supabaseUrl = 'https://seqolypxaaqyrwzcwktp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlcW9seXB4YWFxeXJ3emN3a3RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMTM0NDgsImV4cCI6MjA3NzU4OTQ0OH0.k4k6oql2nk_4MwmTrP9K-5hH0YlMRmSgiYg7UmU9cR4'
const baserow_token = 'R3szgYLTm7m4jqF9ENJoG0lSF3EQ3xjr'

const _supabase = createClient(supabaseUrl, supabaseKey)
supabase = _supabase
console.log('Supabase Instance: ', supabase);

export const getProfile = async () => {
    const user = await getUser()
    const supabase_id = user.id
    const name = user.user_metadata.name

    let profile
    profile = await fetch(`https://api.baserow.io/api/database/rows/table/794809/?user_field_names=true&filter__supabase_id__equal=${supabase_id}`,{
        headers: {
            "Authorization": `Token ${baserow_token}`,
        }
    }).then(res => res.json()).then(res => res.results[0])
    if(!profile){
        profile = await fetch(`https://api.baserow.io/api/database/rows/table/794809/?user_field_names=true&filter__supabase_id__equal=${supabase_id}`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${baserow_token}`,
            },
            body: JSON.stringify({
                supabase_id,
                Nome: name
            })
        }).then(res => res.json())        
    }
    return profile
}

export const login =  async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
}

const register = async(name, email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email,  
        password,
        options: {
            data: {
                name
            }
        }
    })
}

export const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user
}