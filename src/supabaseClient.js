import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sjjjhqujxmsrdfnzgnzq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqampocXVqeG1zcmRmbnpnbnpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMDU3MDUsImV4cCI6MjAxNDU4MTcwNX0.2NyBWiC60QaxPuX_YW_kUW2mF3Pj_4Jzhu448n4NYZ0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)