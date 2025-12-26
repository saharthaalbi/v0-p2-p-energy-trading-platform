-- Create energy_listings table for marketplace
create table if not exists public.energy_listings (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references auth.users(id) on delete cascade,
  energy_type text not null check (energy_type in ('solar', 'wind', 'hydro', 'biomass')),
  amount_kwh numeric not null check (amount_kwh > 0),
  price_per_kwh numeric not null check (price_per_kwh > 0),
  location text not null,
  certification text,
  available boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.energy_listings enable row level security;

-- Create policies for energy_listings
create policy "Anyone can view available listings"
  on public.energy_listings for select
  using (available = true);

create policy "Sellers can insert their own listings"
  on public.energy_listings for insert
  with check (auth.uid() = seller_id);

create policy "Sellers can update their own listings"
  on public.energy_listings for update
  using (auth.uid() = seller_id);

create policy "Sellers can delete their own listings"
  on public.energy_listings for delete
  using (auth.uid() = seller_id);
