json.extract! @pokemon, :id, :name, :attack, :defense,:image_url, :poke_type, :moves
json.items do
  json.array! @pokemon.items, :id, :name, :pokemon_id, :price, :happiness, :image_url
end
