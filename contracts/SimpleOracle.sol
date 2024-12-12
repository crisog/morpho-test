// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

/// @title SimpleOracle
/// @notice A basic oracle implementation that allows manual price updates by authorized addresses
contract SimpleOracle {
    // State variables
    uint256 private _price;
    address private _owner;
    address private _priceUpdater;

    // Events
    event PriceUpdated(uint256 oldPrice, uint256 newPrice);
    event PriceUpdaterChanged(address oldUpdater, address newUpdater);
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    // Custom errors
    error UnauthorizedPriceUpdate();
    error InvalidPrice();
    error InvalidAddress();
    error Unauthorized();

    /// @notice Constructor sets initial price and owner
    /// @param initialPrice The initial price value scaled by 1e36
    constructor(uint256 initialPrice) {
        if (initialPrice == 0) revert InvalidPrice();
        _price = initialPrice;
        _owner = msg.sender;
        _priceUpdater = msg.sender;
    }

    /// @notice Modifier to restrict access to owner
    modifier onlyOwner() {
        if (msg.sender != _owner) revert Unauthorized();
        _;
    }

    /// @notice Returns the current price
    /// @return Current price scaled by 1e36
    function price() external view returns (uint256) {
        return _price;
    }

    /// @notice Updates the current price
    /// @param newPrice New price value scaled by 1e36
    function updatePrice(uint256 newPrice) external {
        if (msg.sender != _priceUpdater && msg.sender != _owner) {
            revert UnauthorizedPriceUpdate();
        }
        if (newPrice == 0) revert InvalidPrice();

        uint256 oldPrice = _price;
        _price = newPrice;

        emit PriceUpdated(oldPrice, newPrice);
    }

    /// @notice Sets a new price updater address
    /// @param newUpdater Address of the new price updater
    function setPriceUpdater(address newUpdater) external onlyOwner {
        if (newUpdater == address(0)) revert InvalidAddress();

        address oldUpdater = _priceUpdater;
        _priceUpdater = newUpdater;

        emit PriceUpdaterChanged(oldUpdater, newUpdater);
    }

    /// @notice Returns the current price updater address
    /// @return Address of the current price updater
    function priceUpdater() external view returns (address) {
        return _priceUpdater;
    }

    /// @notice Returns the current owner address
    function owner() external view returns (address) {
        return _owner;
    }

    /// @notice Transfers ownership of the contract to a new address
    /// @param newOwner Address of the new owner
    function transferOwnership(address newOwner) external onlyOwner {
        if (newOwner == address(0)) revert InvalidAddress();

        address oldOwner = _owner;
        _owner = newOwner;

        emit OwnershipTransferred(oldOwner, newOwner);
    }
}
