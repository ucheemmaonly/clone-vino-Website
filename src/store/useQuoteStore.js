import { create } from "zustand";

export const useQuoteStore = create((set) => ({
  quote: null, quoteLoading: true, quoteError: "",

  quotes: [], collectionLoading: true, collectionError: "",

  setQuote: (quote) => set({ quote }),
  setQuoteLoading: (quoteLoading) => set({ quoteLoading }),
  setQuoteError: (quoteError) => set({ quoteError }),

  setQuotes: (quotes) => set({ quotes }),
  setCollectionLoading: (collectionLoading) => set({ collectionLoading }),
  setCollectionError: (collectionError) => set({ collectionError }),
}));
