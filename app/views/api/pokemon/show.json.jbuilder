json.extract! @pokemon, :id, :name, :attack, :defense,:image_url, :poke_type
json.moves do
  json.partial! @pokemon.moves.join(", ")
end
json.items do
  json.array! @pokemon.items, :id, :name, :pokemon_id, :price, :happiness, :image_url
end
