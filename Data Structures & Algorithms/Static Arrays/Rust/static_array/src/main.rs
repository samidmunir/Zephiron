/*
    Static Array Data Structure & Algorithms (Rust implementation)
*/

mod static_array_ds {
    struct StaticArray {
        array: [i32; 5],
        pointer: i32,
        num_elements: i32,
        capacity: i32,
    }

    fn is_empty(input: StaticArray) -> bool {
        if input.pointer == -1 {
            return true;
        } else {
            return false;
        }
    }

    fn is_full(input: StaticArray) -> bool {
        if input.pointer == input.capacity - 1 || input.num_elements == input.capacity {
            return true;
        } else {
            return false;
        }
    }

    fn print_array(input: StaticArray) {
        println!("array: {:?}", input.array);
    }

    // fn print_array_stats(input: StaticArray) {}

    // fn init_array(capacity: u32) -> StaticArray {}
}

fn main() {
    println!("\nStatic Array Implementation in Rust");
    println!("--------------------------------------------------");
}
