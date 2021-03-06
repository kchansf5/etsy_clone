class Product < ApplicationRecord
  include PgSearch

  validates :product_name, :description, :price, :category, :image_url, presence: true

  has_many :shopping_cart_items

  # pg_search_scope :search_name, :against => :product_name
  pg_search_scope :search_name,
  :against =>
  [:product_name, :category],
  :using => {
    :tsearch => {
      :prefix => true,
      :any_word => true,
    }
  }
end
