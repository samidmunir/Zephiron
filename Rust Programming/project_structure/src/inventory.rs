const FLOOR_SPACE: i32 = 5000;
pub const MANAGER: &str = "Sami M.";
enum ProductCategory {
    Ladder,
    Hammer,
}
struct Item {
    name: String,
    category: ProductCategory,
    quantity: u32,
}

pub fn talk_to_manager() {
    println!("talking to {}...", MANAGER);
}
