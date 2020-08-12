class Foo {

    final Semaphore x = new Semaphore(0);
    final Semaphore y = new Semaphore(0);

    public void first(Runnable printFirst) throws InterruptedException {
        
        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
        x.release();
    }

    public void second(Runnable printSecond) throws InterruptedException {
        
        // printSecond.run() outputs "second". Do not change or remove this line.
        x.acquire();
        printSecond.run();
        y.release();
    }

    public void third(Runnable printThird) throws InterruptedException {
        
        // printThird.run() outputs "third". Do not change or remove this line.
        y.acquire();
        printThird.run();
    }
}