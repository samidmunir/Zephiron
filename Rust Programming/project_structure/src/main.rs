/*
    Topics:
    - Packages, crates, modules
    - Binary crates vs. library crates
    - Submodules
    - The pub keyword
    - Inline modules
    - File-based modules
    - Folder-based modules
    - Public enums, public structs, public fields
    - The crate prefix
    - The use keyword
    - The self keyword
    - The super keyword
    - The as keyword
    - The standard library
    - The Glob operator (*)
    - Multiple binary crates
    - Documentation comments
*/

mod inventory {
    const FLOOR_SPACE: i32 = 5000;
    pub const MANAGER: &str = "Sami M.";
    
    #[derive(Debug)]
    enum ProductCategory {
        Ladder,
        Hammer
    }

    #[derive(Debug)]
    struct Item {
        name: String,
        category: ProductCategory,
        quantity: u32,
    }

    pub fn talk_to_manager() {
        println!("talking to {}...", MANAGER);
    }
}

fn main() {
    println!("\nProject Structure in Rust (using Warehouse example)");
    println!("-------------------------------------------------------");

    /*
        "cargo new command" -> create a Rust package.
        - a package is a folder with a a Cargo.toml file.
            > this file holds metadata about the package like its name, version, dependencies, etc.

        A package is a collection of one or more crates.
        - a crate is a collection of Rust code that produces an executable or a library.
            > a crate is the smallest amount of code that the Rust compiler considers at a time (.rs file + main()).
        - a binary crate is a crate that compiles to an executable.
            > has a main() function that is the entrypoint for the executable.
        - a library crate exports functionality for other Rust programs to share and use.
            > does not have a main() function and does not compile to be an executable program.
    */

    /*
        A module is an organizational container that encapsulates related code (constructs of code/items).
    */
    println!("\ninventory.MANAGER: {}", inventory::MANAGER);
    println!("\ntalk_to_manager():");
    inventory::talk_to_manager();
    
}