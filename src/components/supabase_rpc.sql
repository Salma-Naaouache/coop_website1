-- Enable this function in your Supabase SQL editor
create or replace function list_tables()
returns setof text as $$
  select table_name 
  from information_schema.tables 
  where table_schema = 'public';
$$ language sql security definer;