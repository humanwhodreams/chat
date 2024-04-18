const Receiver = () => {
  return (
    <div className="flex max-w-lg gap-x-2 sm:gap-x-4 me-11">
      <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
        <span className="text-sm font-medium leading-none text-white">EE</span>
      </span>

      <div>
        <div className="p-4 space-y-3 border bg-background border-border rounded-2xl">
          <p className="max-w-xl text-sm text-foreground">
            Hello, we meet at the gym earlier.
          </p>
        </div>
      </div>
    </div>
  );
};

export { Receiver };
